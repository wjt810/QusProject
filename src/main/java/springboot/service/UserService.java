package springboot.service;

import java.util.List;

import springboot.pojo.User;

public interface UserService {
	
	List<User> list(String name);

}
