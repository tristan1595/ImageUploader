package com.imageuploader.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.imageuploader.model.ERole;
import com.imageuploader.model.Role;

public interface RoleRepository extends JpaRepository<Role, Long>{
	Optional<Role> findByName(ERole name);
}
