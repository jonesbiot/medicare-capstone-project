package com.capstone.project.capstone.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capstone.project.capstone.model.User;

public interface UserRepository extends JpaRepository<User,Long> {

}
