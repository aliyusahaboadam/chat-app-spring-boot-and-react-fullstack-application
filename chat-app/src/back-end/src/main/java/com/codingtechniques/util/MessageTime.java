package com.codingtechniques.util;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

public class MessageTime {

	public static String getTime() {
		LocalTime currentime = LocalTime.now();
		DateTimeFormatter timeFormatter = DateTimeFormatter.ofPattern("hh:mm a");
		String formattedtime =  currentime.format(timeFormatter);
		return formattedtime;
	}

}
