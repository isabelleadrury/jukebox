-- TODO
DROP TABLE IF EXISTS playlists;
DROP TABLE IF EXISTS tracks;
DROP TABLE IF EXISTS playlists_tracks;

CREATE TABLE playlists(
	id serial PRIMARY KEY,
	name text NOT NULL,
	description
)

CREATE TABLE tracks (
id serial PRIMARY KEY,
name text NOT NULL,
duration_ms integer NOT NULL 
)

CREATE TABLE playlists_tracks(
id serial PRIMARY KEY,
playlist_id integer NOT NULL REFERENCES playlists(id) ON DELETE CASCADE,
track_id integer NOT NULL REFERENCES tracks(id) ON DELETE CASCADE
)