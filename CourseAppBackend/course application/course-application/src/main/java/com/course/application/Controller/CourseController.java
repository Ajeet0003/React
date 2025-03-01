package com.course.application.Controller;

import com.course.application.Dao.CourseRepo;
import com.course.application.Model.Course;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@CrossOrigin("*")
public class CourseController {

  @Autowired
  private  CourseRepo courseRepo;

  @GetMapping("/getCourse")
  public List<Course> getCourse(){
      return courseRepo.findAll();
  }

  @PostMapping("/saveCourse")
  public Course saveCourse(@RequestBody Course course){
    return courseRepo.save(course);
  }

  @DeleteMapping("/deleteCourse/{id}")
  public void deleteCourse(@PathVariable int id){
   Course course= courseRepo.findById(id).get();
    courseRepo.delete(course);
  }
}
