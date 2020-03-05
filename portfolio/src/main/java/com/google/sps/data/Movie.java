package com.google.sps.data;

/**
 * Class that store name and metadata about a movie.
 */
public final class Movie {

  private final String name;
  private final String link;

  public Movie(String name, String link) {
    this.name = name;
    this.link = link;
  }
}