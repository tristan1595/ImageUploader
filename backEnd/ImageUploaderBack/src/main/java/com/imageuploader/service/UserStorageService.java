package com.imageuploader.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.imageuploader.model.User;
import com.imageuploader.repository.UserRepository;

@Service
public class UserStorageService {

	@Autowired
	private UserRepository userRepository;
	
	public User store(User user) {
		return userRepository.save(user);
	}
	
	public User getUser(Long id) {
		return userRepository.findById(id).get();
	}
	
	public List<User> getAllUser() {
		return userRepository.findAll();
	}
	
	public void deleteUserById(Long id) {
		userRepository.deleteById(id);
	}
}
