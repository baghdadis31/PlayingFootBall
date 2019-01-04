package com.example.PlayingFootball.controllers;

import com.example.PlayingFootball.interfaces.BeerRepository;
import com.example.PlayingFootball.model.Beer;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.stream.Collectors;

@RestController
public class BeerController {

    private final BeerRepository repository;

    public BeerController(BeerRepository repository) {
        this.repository = repository;
    }

    @GetMapping(path = "/good-beers", produces = "application/json")
    public Collection<Beer> goodBeers(){
        return repository.findAll()
                .stream()
                .filter(this::isGreat)
                .collect(Collectors.toList());

    }

    private boolean isGreat(Beer beer){
        return  !beer.getName().equals("Budweiser") &&
                !beer.getName().equals("Coors Light") &&
                !beer.getName().equals("PBR");

    }
}
