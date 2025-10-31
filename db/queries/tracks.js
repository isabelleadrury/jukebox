import db from "#db/client";

export async function getTracks() {
  try {
    const sql = `
		SELECT * 
		FROM tracks`;
    const { rows: tracks } = await db.query(sql);
    return tracks;
  } catch (error) {
    console.error(`Error fetching tracks`, error);
  }
}

export async function getTrackById(id) {
  try {
    const sql = `
		SELECT *
		FROM tracks
		WHERE id = $1
		`;
    const {
      rows: [track],
    } = await db.query(sql, [id]);
    return track;
  } catch (error) {
    console.error(`Error fetching tracks by id`, error);
  }
}
