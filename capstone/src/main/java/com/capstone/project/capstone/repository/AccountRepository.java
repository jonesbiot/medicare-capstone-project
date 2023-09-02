package com.capstone.project.capstone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.capstone.project.capstone.model.Account;



@Repository
public interface AccountRepository extends JpaRepository<Account, Integer>{

}