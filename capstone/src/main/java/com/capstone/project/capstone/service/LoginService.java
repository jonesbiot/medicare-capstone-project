package com.capstone.project.capstone.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capstone.project.capstone.model.Login;
import com.capstone.project.capstone.repository.LoginRepository;
import com.capstone.project.capstone.model.Account;



@Service
public class LoginService {

	@Autowired
	AccountService accountService;
	
	@Autowired
	LoginRepository loginRepository;
	
	public String signIn(Login login) {		
		Optional<Login> result = loginRepository.findById(login.getEmailid());
		
		if(result.isPresent()) {
			Login ll = result.get();
			if(ll.getPassword().equals(login.getPassword())) {
					
					if(ll.getTypeofuser().equals("admin")) {
						return "Congratulations!, you have successfully login as an Admin";
					}else {
						
						return "Congratulations!, you have successfully login as a Customer";
					}
					
			}else {
				return "Sorry, your Password is wrong, kindly check and try again";
			}
		}else {
			return "Sorry, your email is wrong, kindly check and try again";
		}
	}
	
	public String signUp(Login login) {
		if(login.getTypeofuser().equals("admin")) {
			return "Sorry you can't create admin account";
		}else {
			Optional<Login> result = loginRepository.findById(login.getEmailid());
			if(result.isPresent()) {
				return "sorry, this account already exists, please check and try again";
			}else {
				Account acc = new Account();
				acc.setAmount(3500);	// accno auto generate, amount 1000, emaliid as FK
				acc.setEmailid(login.getEmailid());
				loginRepository.save(login);
				accountService.createAccount(acc);
				return "Thank you, your account created successfully,you can login now.";
			}
		}
	}
}