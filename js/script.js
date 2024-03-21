// Copyright (c) 2024 Mohammed El-hayek All rights reserved
//
// Created by: Mohammed El-hayek
// Created on: Mar 2024
// This file contains the JS functions for index.html

/**
 * This function gets users first name and age and shows it back to user.
 */
function enterClicked() {
  // input
  const userhousenumber = parseInt(document.getElementById("House").value)
  const userStreetname = document.getElementById("Street").value

  // output
  document.getElementById("address").innerHTML =
    "Your info is: " + userhousenumber + userStreetname + "."
}
