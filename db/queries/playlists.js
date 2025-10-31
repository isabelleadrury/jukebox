import db from "#db/client";

export async function getPlaylists() {
  try {
    const sql = `
		SELECT *
		FROM playlists`;
    const { rows: playlists } = await db.query(sql);
    return playlists;
  } catch (error) {
    console.error(`Error fetching playlists`, error);
  }
}

export async function createPlaylist(name, descprition) {
  try {
    const sql = `
	INSERT INTO playlists
	(name, description)
	VALUES
	($1, $2)
	RETURNING *`;
    const {
      rows: [playlist],
    } = await db.query(sql, [name, description]);
    return playlist;
  } catch (error) {
    console.error(`Error creating a playlist`, error);
  }
}

export async function getPlaylistById() {
  try {
    const sql = `
		SELECT *
		FROM playlists
		WHERE id = $1`;
    const {
      rows: [playlist],
    } = await db.query(sql, [id]);
    return playlist;
  } catch (error) {}
}
