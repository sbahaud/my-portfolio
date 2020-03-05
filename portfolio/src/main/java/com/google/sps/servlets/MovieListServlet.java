package com.google.sps.servlets;

import com.google.gson.Gson;
import com.google.sps.data.Movie;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servelet that fetches a random movie from a list.
 */
@WebServlet("/movies")
public class MovieListServlet extends HttpServlet {
  List<Movie> movies =
      Arrays.asList(
          new Movie("Parasite", "https://en.wikipedia.org/wiki/Parasite_(2019_film)"),
          new Movie("Foreigner", "https://en.wikipedia.org/wiki/The_Foreigner_(2017_film)"),
          new Movie("The Farewell", "https://en.wikipedia.org/wiki/The_Farewell_(2019_film)"),
          new Movie("Downton Abbey", "https://en.wikipedia.org/wiki/Downton_Abbey_(film)"),
          new Movie("American factory", "https://en.wikipedia.org/wiki/American_Factory"));

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    Movie movie = movies.get((int) (Math.random() * movies.size()));

    Gson gson = new Gson();
    response.setContentType("text/html;");
    response.getWriter().println(gson.toJson(movie));
  }
}