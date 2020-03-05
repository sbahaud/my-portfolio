
package com.google.sps.data;

public final class Comment {

  private final String comment;
  private final String timestamp;

  public Comment(String timestamp, String comment) {
    this.comment = comment;
    this.timestamp = timestamp;
  }
}