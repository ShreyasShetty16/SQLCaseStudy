package com.sonata.dao;

public interface UserInterface {
	public int createUser(User user);
	public boolean validateUser(String Username, String Password);

}
