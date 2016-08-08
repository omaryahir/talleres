/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model;

import entities.Person;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

/**
 *
 * @author omaryahir
 */
@Service
public class PersonDAO {
    
    @PersistenceContext
    private EntityManager em;
    
    @Transactional(rollbackFor = {ServiceException.class})
    
    public void create(Person dto) throws ServiceException {
        em.persist(dto); // insert
        //em.merge(dto); // update
        //em.remove(dto); // remove
        //em.find(Person.class, "1231"); // find by id
    }
    
    public Person readById(String id) throws SecurityException {
        return em.find(Person.class, id);
    }
    
    public Person readByIdJPQL(String id) throws SecurityException {
        String sql = "Select p from Person p where id = :id";
        
        Query q=em.createQuery(sql);
        q.setParameter("id", id);
        
        try {
            return (Person)q.getSingleResult();
        } catch (Exception e) {
            return null;
        }
    }
    
    public List<Person> readAllJPQL() throws SecurityException{
        String sql = "Select p from Person p";
        
        Query q=em.createQuery(sql);
        return q.getResultList();
    }
    
    public boolean readByIdJPQLCreate(String id) throws SecurityException {
        String sql = "Select a from Person p Where p.id=:id ";
        
        Query q=em.createQuery(sql);
        q.setParameter("id", id);
        
        if(q.getResultList().size()>0) {
            return true;
        } else {
            return false;
        }
        
    }
    
    public int createJPQL(Person dto) throws SecurityException{
        if (readByIdJPQLCreate(dto.getId().toString())) {
            return 0;
        } else {
            em.persist(dto);
            return 1;
        }
    }
    
    
    
    
    
    
}
