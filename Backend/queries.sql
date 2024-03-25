

CREATE DATABASE userdb;

CREATE TABLE userdata (
	id SERIAL PRIMARY KEY,
	username VARCHAR(191) NOT NULL,
	fullname VARCHAR(191) NOT NULL
);

CREATE DATABASE challengedb;

CREATE TABLE challenge (
	id SERIAL PRIMARY KEY,
	title VARCHAR(191) NOT NULL,
	templateFile BYTEA NOT NULL,
	readmeFile BYTEA NOT NULL,
	difficulty VARCHAR(191) NOT NULL,
	testCasesFile BYTEA NOT NULL,
	authorId SERIAL NOT NULL
);

CREATE TABLE submittedfile (
	id SERIAL PRIMARY KEY,,
	fileName VARCHAR(191) NOT NULL,
	fileExtension VARCHAR(191) NOT NULL,
	file BYTEA NOT NULL,
	PRIMARY KEY(id)
);

CREATE TABLE submission (
	id SERIAL PRIMARY KEY,,
	submittedTime TIMESTAMP WITH TIME ZONE NOT NULL,
	score FLOAT4 NOT NULL,
	userId VARCHAR(191) NOT NULL,
	CONSTRAINT FK_SUBMISSION_USER FOREIGN KEY(userId) REFERENCES User(id),
	challengeId VARCHAR(191) NOT NULL,
	CONSTRAINT FK_SUBMISSION_CHALLENGE FOREIGN KEY(challengeId) REFERENCES Challenge(id) ON DELETE CASCADE,
	submittedfileId VARCHAR(191) UNIQUE NOT NULL,
	CONSTRAINT FK_SUBMISSION_SUBMITTEDFILE FOREIGN KEY(submittedfileId) REFERENCES SubmittedFile(id),
	PRIMARY KEY(id)
);
