<?php

class Message extends Eloquent {
	protected $guarded = array('id', 'created_at', 'updated_at');

	public static $rules = array();
}
