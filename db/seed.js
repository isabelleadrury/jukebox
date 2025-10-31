import db from "#db/client";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  // TODO
  await db.query(`DELETE FROM playlists_tracks;`);
  await db.query(`DELETE FROM playlists;`);
  await db.query(`DELETE FROM tracks;`);

  // tracks
  for (let i = 1; i <= 20; i++) {
    await db.query(`INSERT INTO tracks (title, artist) VALUES ($1, $2);`, [
      `Track ${i}`,
      `Artist ${i}`,
    ]);
  }

  // playlists
  for (let i = 1; i <= 10; i++) {
    await db.query(`INSERT INTO playlists (name) VALUES ($1);`, [
      `Playlist ${i}`,
    ]);
  }

  // playlist-track relationships (just linking first 15)
  for (let i = 1; i <= 15; i++) {
    await db.query(
      `INSERT INTO playlists_tracks (playlist_id, track_id) VALUES ($1, $2);`,
      [((i - 1) % 10) + 1, i]
    );
  }
}
