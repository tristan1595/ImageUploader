package com.imageuploader.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.imageuploader.message.ResponseMessage;
import com.imageuploader.model.User;
import com.imageuploader.service.UserStorageService;

@Controller
@CrossOrigin("http://localhost:8080")
public class UserController {

	@Autowired
	private UserStorageService userStorageService;
	
	@CrossOrigin(origins = "http://localhost:8081")
	@PostMapping("/user/create")
	public ResponseEntity<ResponseMessage> uploadUser(@RequestBody User user) {
		String message = "";
		try {
			userStorageService.store(user); 
			
			message = "Uploaded the user successfully : " + user.getEmail();
			return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
		} catch (Exception e) {
			message = "Could not upload the file: " + user.getEmail() + "!";
			return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
		}
	}
	
	@CrossOrigin(origins = "http://localhost:8081")
	@GetMapping("/user/all")
	public ResponseEntity<List<User>> getListUsers() {
		List<User> users = userStorageService.getAllUser();
		return ResponseEntity.status(HttpStatus.OK).body(users);
	}
	
	@CrossOrigin(origins = "http://localhost:8081")
	@GetMapping("/user/{id}")
	public ResponseEntity<User> getUser(@PathVariable Long id) {
		User user = userStorageService.getUser(id);
		return ResponseEntity.status(HttpStatus.OK).body(user);
	}
	
	@CrossOrigin(origins = "http://localhost:8081")
	@DeleteMapping("user/delete/{id}")
	public ResponseEntity<ResponseMessage> deleteUser(@PathVariable Long id) {
		String message = "";
		try {
			userStorageService.deleteUserById(id);
			message = "Delete the file successfully";
			return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
		} catch (Exception e) {
			message = "Could not delete the file";
			return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
		}
	}
}
