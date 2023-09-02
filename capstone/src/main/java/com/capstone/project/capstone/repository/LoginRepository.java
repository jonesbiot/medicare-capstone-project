package com.capstone.project.capstone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.capstone.project.capstone.model.Login;

@Repository
public interface LoginRepository extends JpaRepository<Login, String>{

}
