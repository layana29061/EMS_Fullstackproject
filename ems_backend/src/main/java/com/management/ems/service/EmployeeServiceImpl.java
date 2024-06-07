package com.management.ems.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.management.ems.dto.EmployeeDto;
import com.management.ems.entity.Employee;
import com.management.ems.exception.ResourceNotFoundException;
import com.management.ems.mapper.EmployeeMapper;
import com.management.ems.repository.EmployeeRepository;

import lombok.AllArgsConstructor;


@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {
	
	public EmployeeRepository employeeRepository;
	//-------CREATE EMPLOYEE-------
	
	@Override
	public EmployeeDto createEmployee(EmployeeDto employeeDto) {
		//converting employeedto to employee jpa entity
		Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
		Employee savedEmployee = employeeRepository.save(employee);
		
		return EmployeeMapper.mapToEmployeeDto(savedEmployee);
	}

	//------GET EMPLOYEE BY ID------
	
	@Override
	public EmployeeDto getEmployeeById(Long employeeId) {
		Employee employee= employeeRepository.findById(employeeId)
				.orElseThrow(()-> new ResourceNotFoundException("Employee is not exists wth given id: " + employeeId));
		return EmployeeMapper.mapToEmployeeDto(employee);
	}
	
	//-------GET ALL EMPLOYEES-------
	
	@Override
	public List<EmployeeDto> getAllEmployees() {
		List<Employee> employees = employeeRepository.findAll();
		return employees.stream().map((employee)->EmployeeMapper.mapToEmployeeDto(employee))
				.collect(Collectors.toList());
	}

	//------UPDATE EMPLOYEE -------
	@Override
	public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee) {
		Employee employee= employeeRepository.findById(employeeId)
				.orElseThrow(()-> new ResourceNotFoundException("Employee is not exists wth given id: " + employeeId));
		
		employee.setFirstName(updatedEmployee.getFirstName());
		employee.setLastName(updatedEmployee.getLastName());
		employee.setEmail(updatedEmployee.getEmail());
		
		Employee updatedEmployeeObj= employeeRepository.save(employee);
		
		return EmployeeMapper.mapToEmployeeDto(updatedEmployeeObj);
	}

	@Override
	public void deleteEmployee(Long employeeId) {
		Employee employee= employeeRepository.findById(employeeId)
				.orElseThrow(()-> new ResourceNotFoundException("Employee is not exists wth given id: " + employeeId));
		
		employeeRepository.deleteById(employeeId);
		
	}

}