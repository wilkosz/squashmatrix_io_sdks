/*
 * Sqaush Matrix API
 * v1 documentation
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package io.swagger.client.model;

import java.util.Objects;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.client.model.Club;
import io.swagger.client.model.Game;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * Player
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2018-09-19T07:37:31.189-04:00")
public class Player {
  @SerializedName("id")
  private Long id = null;

  @SerializedName("name")
  private String name = null;

  @SerializedName("rating")
  private Integer rating = null;

  @SerializedName("games_as_player_a")
  private List<Game> gamesAsPlayerA = new ArrayList<Game>();

  @SerializedName("games_as_player_b")
  private List<Game> gamesAsPlayerB = new ArrayList<Game>();

  @SerializedName("clubs")
  private List<Club> clubs = new ArrayList<Club>();

  public Player id(Long id) {
    this.id = id;
    return this;
  }

   /**
   * Get id
   * @return id
  **/
  @ApiModelProperty(required = true, value = "")
  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Player name(String name) {
    this.name = name;
    return this;
  }

   /**
   * Get name
   * @return name
  **/
  @ApiModelProperty(required = true, value = "")
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Player rating(Integer rating) {
    this.rating = rating;
    return this;
  }

   /**
   * Get rating
   * @return rating
  **/
  @ApiModelProperty(required = true, value = "")
  public Integer getRating() {
    return rating;
  }

  public void setRating(Integer rating) {
    this.rating = rating;
  }

  public Player gamesAsPlayerA(List<Game> gamesAsPlayerA) {
    this.gamesAsPlayerA = gamesAsPlayerA;
    return this;
  }

  public Player addGamesAsPlayerAItem(Game gamesAsPlayerAItem) {
    this.gamesAsPlayerA.add(gamesAsPlayerAItem);
    return this;
  }

   /**
   * Get gamesAsPlayerA
   * @return gamesAsPlayerA
  **/
  @ApiModelProperty(required = true, value = "")
  public List<Game> getGamesAsPlayerA() {
    return gamesAsPlayerA;
  }

  public void setGamesAsPlayerA(List<Game> gamesAsPlayerA) {
    this.gamesAsPlayerA = gamesAsPlayerA;
  }

  public Player gamesAsPlayerB(List<Game> gamesAsPlayerB) {
    this.gamesAsPlayerB = gamesAsPlayerB;
    return this;
  }

  public Player addGamesAsPlayerBItem(Game gamesAsPlayerBItem) {
    this.gamesAsPlayerB.add(gamesAsPlayerBItem);
    return this;
  }

   /**
   * Get gamesAsPlayerB
   * @return gamesAsPlayerB
  **/
  @ApiModelProperty(required = true, value = "")
  public List<Game> getGamesAsPlayerB() {
    return gamesAsPlayerB;
  }

  public void setGamesAsPlayerB(List<Game> gamesAsPlayerB) {
    this.gamesAsPlayerB = gamesAsPlayerB;
  }

  public Player clubs(List<Club> clubs) {
    this.clubs = clubs;
    return this;
  }

  public Player addClubsItem(Club clubsItem) {
    this.clubs.add(clubsItem);
    return this;
  }

   /**
   * Get clubs
   * @return clubs
  **/
  @ApiModelProperty(required = true, value = "")
  public List<Club> getClubs() {
    return clubs;
  }

  public void setClubs(List<Club> clubs) {
    this.clubs = clubs;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Player player = (Player) o;
    return Objects.equals(this.id, player.id) &&
        Objects.equals(this.name, player.name) &&
        Objects.equals(this.rating, player.rating) &&
        Objects.equals(this.gamesAsPlayerA, player.gamesAsPlayerA) &&
        Objects.equals(this.gamesAsPlayerB, player.gamesAsPlayerB) &&
        Objects.equals(this.clubs, player.clubs);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, name, rating, gamesAsPlayerA, gamesAsPlayerB, clubs);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Player {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    rating: ").append(toIndentedString(rating)).append("\n");
    sb.append("    gamesAsPlayerA: ").append(toIndentedString(gamesAsPlayerA)).append("\n");
    sb.append("    gamesAsPlayerB: ").append(toIndentedString(gamesAsPlayerB)).append("\n");
    sb.append("    clubs: ").append(toIndentedString(clubs)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}
