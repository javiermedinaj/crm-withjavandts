package com.api.crm.service;

import com.api.crm.dto.CustomerDTO;
import com.api.crm.model.Customer;
import com.api.crm.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CustomerService {
    @Autowired
    private CustomerRepository customerRepository;

    public List<CustomerDTO> getAllCustomers() {
        return customerRepository.findAll().stream().map(this::convertToDTO).collect(Collectors.toList());
    }
    public CustomerDTO getCustomerById(Long id) {
        return customerRepository.findById(id).map(this::convertToDTO).orElse(null);
    }
    public CustomerDTO createCustomer(CustomerDTO customerDTO) {
        Customer customer = new Customer (null, customerDTO.getName(), customerDTO.getEmail(), customerDTO.getPhone());
        customer = customerRepository.save(customer);
        return convertToDTO(customer);
    }
    public CustomerDTO updateCustomer(Long id, CustomerDTO customerDTO) {
        return customerRepository.findById(id)
                .map(existingCustomer -> {
                    existingCustomer.setName(customerDTO.getName());
                    existingCustomer.setEmail(customerDTO.getEmail());
                    existingCustomer.setPhone(customerDTO.getPhone());
                    Customer updatedCustomer = customerRepository.save(existingCustomer);
                    return convertToDTO(updatedCustomer);
                })
                .orElse(null);
    }
    public void deleteCustomer(Long id) {
        customerRepository.deleteById(id);
    }
    private CustomerDTO convertToDTO(Customer customer) {
        return new CustomerDTO(customer.getId(), customer.getName(), customer.getEmail(), customer.getPhone());
    }
}