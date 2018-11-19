/*ALL SQL CONSTANTS FOR USER CONTROLLER */

//create mentor, mentee and matchces table for testing 
module.exports.create_mentor_table_sql = function () {
    sql = `  
    CREATE TABLE IF NOT EXISTS Mentors ( 
        user_id varchar(255)int varchar (255) NOT NULL,
        first_name varchar(255) NOT NULL,
        last_name varchar(255) NOT NULL,
        email_address varchar(255) NOT NULL UNIQUE,
        biography varchar(255),
        zipcode varchar(5) NOT NULL,
        date_of_birth DATE NOT NULL,
        profession varchar(255) NOT NULL,
        skills varchar(255) NOT NULL,
        profile_pic_URL varchar(255) NOT NULL,
        hobbies varchar(255)
    );`
    return sql;
}

module.exports.create_mentee_table_sql = function () {
    sql = `    
        CREATE TABLE IF NOT EXISTS Mentees (
            user_id varchar(255) NOT NULL UNIQUE,
            first_name varchar(255) NOT NULL,
            last_name varchar(255) NOT NULL,
            email_address varchar(255) NOT NULL UNIQUE,
            biography varchar(255),
            zipcode varchar(5) NOT NULL,
            date_of_birth DATE NOT NULL,
            profession varchar(255) NOT NULL,
            skills varchar(255) NOT NULL,
            profile_pic_URL varchar(255) NOT NULL,
            hobbies varchar(255)
        );`
    return sql;
}

module.exports.create_password_table_sql = function () {
    sql = `  
    CREATE TABLE IF NOT EXISTS Passwords ( 
        email_address varchar(255) NOT NULL UNIQUE,
        password varchar(255),
        salt varchar(255)
    );`
    return sql;
}

module.exports.create_matches_table_sql = function () {
    sql = `
    CREATE TABLE IF NOT EXISTS Matches (
        match_id varchar(255) NOT NULL UNIQUE,
        mentor_id varchar(255) NOT NULL,
        mentee_id varchar(255) NOT NULL,
        ratings int
    );`
    return sql;
}

module.exports.create_messages_table_sql = function () {
    sql = `CREATE TABLE IF NOT EXISTS Messages (
        message_id varchar(255) NOT NULL UNIQUE,
        match_id varchar(255) NOT NULL,
        to_id varchar(255) NOT NULL,
        from_id varchar(255) NOT NULL,
        message_body varchar(255),
        timestamp datetime NOT NULL 
    );`
    return sql;
}

module.exports.create_skills_table_sql = function () {
    sql = `CREATE TABLE IF NOT EXISTS Skills (
        skills varchar(255) NOT NULL UNIQUE,
        users varchar(255) NOT NULL
        
    );`
    return sql;
}

module.exports.create_skills_table_sql = function () {
    sql = `CREATE TABLE IF NOT EXISTS Skills (
        skills varchar(255) NOT NULL UNIQUE,
        users varchar(255) NOT NULL
    );`
    return sql;
}


module.exports.create_professions_table_sql = function () {
    sql = `CREATE TABLE IF NOT EXISTS Profession (
        profession varchar(255) NOT NULL UNIQUE,
        users varchar(255) NOT NULL
    );`
    return sql;
}
