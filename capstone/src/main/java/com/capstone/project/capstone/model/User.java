package com.capstone.project.capstone.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;



@Entity
public class User {
	@Id
    @GeneratedValue                         //(strategy = GenerationType.IDENTITY)
	private Long id;
    private String mediname;
    private float price;            
    @Lob
    private String image;
    private String contact;
    
    
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getMediname() {
		return mediname;
	}
	public void setMediname(String mediname) {
		this.mediname = mediname;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
}
    
	