CREATE TABLE "comments" (
  "id" INTEGER NOT NULL,
  "run_id" INTEGER NOT NULL,
  "user_id" INTEGER NOT NULL,
  "comment" TEXT NOT NULL,
  FOREIGN KEY("user_id") REFERENCES "Users"("id"),
  FOREIGN KEY("run_id") REFERENCES "Runs"("id"),
  PRIMARY KEY("id" AUTOINCREMENT)
);

CREATE TABLE "game_runs" (
  "game_id" INTEGER NOT NULL,
  "run_id" INTEGER NOT NULL,
  FOREIGN KEY("game_id") REFERENCES Games("id"),
  FOREIGN KEY("run_id") REFERENCES Runs("id"),
  PRIMARY KEY("game_id", "run_id")
);

CREATE TABLE "games" (
  "id" INTEGER NOT NULL,
  "name" TEXT NOT NULL,
  "genre_id" INTEGER NULL,
  "image" TEXT,
  FOREIGN KEY("genre_id") REFERENCES "Genres"("id"),
  PRIMARY KEY("id" AUTOINCREMENT)
);

CREATE TABLE "genres" (
  "id" INTEGER NOT NULL,
  "name" TEXT NOT NULL,
  PRIMARY KEY("id")
);

CREATE TABLE "runs" (
  "id" INTEGER NOT NULL,
  "user_id" INTEGER NOT NULL,
  "game_id" INTEGER NOT NULL,
  "duration" INTEGER NOT NULL,
  "category" TEXT NOT NULL CHECK("category" IN ('any%', '100%', 'low%', 'high%', 'glitchless')),
  "genre" TEXT NOT NULL,
  "status" TEXT NOT NULL CHECK("status" IN ('verified', 'pending', 'removed')),
  "verified_by" INTEGER,
  "verified_at" INTEGER,
  "removed_by" INTEGER,
  "removed_at" INTEGER,
  "video" TEXT,
  FOREIGN KEY("removed_by") REFERENCES "Users"("id"),
  FOREIGN KEY("verified_by") REFERENCES "Users"("id"),
  FOREIGN KEY("game_id") REFERENCES "Games"("id"),
  FOREIGN KEY("user_id") REFERENCES "Users"("id"),
  PRIMARY KEY("id")
);

CREATE TABLE "sqlite_sequence" (
  "name" TEXT,
  "seq" INTEGER
);

CREATE TABLE "user_bans" (
  "user_id" INTEGER NOT NULL,
  "banned_by" INTEGER,
  "ban_reason" TEXT NOT NULL,
  "duration" INTEGER,
  "ban_until" INTEGER NOT NULL,
  FOREIGN KEY("user_id") REFERENCES "Users"("id"),
  FOREIGN KEY("banned_by") REFERENCES "Users"("id")
);

CREATE TABLE "users" (
  "id" INTEGER NOT NULL,
  "email" TEXT NOT NULL,
  "phone" TEXT NOT NULL CHECK ("phone" LIKE '(___)___-____' OR phone LIKE '__________'),
  "first_name" TEXT CHECK("first_name" LIKE '%[^a-zA-Z]%'),
  "last_name" TEXT,
  "password" TEXT NOT NULL CHECK(length("password") >= 8),
  "user_type" TEXT NOT NULL CHECK("user_type" IN ('admin', 'mod', 'user')),
  "username" TEXT,
  PRIMARY KEY("id")
);
