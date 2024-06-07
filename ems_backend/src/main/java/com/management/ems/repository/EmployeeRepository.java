package com.management.ems.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.management.ems.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
