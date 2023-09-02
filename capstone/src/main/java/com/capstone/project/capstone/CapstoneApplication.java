package com.capstone.project.capstone;

import javax.annotation.PostConstruct;
import com.capstone.project.capstone.model.Login;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.capstone.project.capstone.repository.LoginRepository;

@SpringBootApplication
public class CapstoneApplication {
	@Autowired   //start  from here
	LoginRepository loginRepository;
	
	@PostConstruct
	public void adminAccountCreate() {
		Login ll = new Login();
		ll.setEmailid("admin@gmail.com");
		ll.setPassword("admin@123");
		ll.setTypeofuser("admin");
		loginRepository.save(ll);
		System.out.println("Account created...");
	}         // end here

	public static void main(String[] args) {
		SpringApplication.run(CapstoneApplication.class, args);
	}

}
