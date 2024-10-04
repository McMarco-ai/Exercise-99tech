import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import dotenv from "dotenv";


dotenv.config();


const sequelize = new Sequelize('androidtv_db', 'root', process.env.PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
});


interface MovieAttributes {
  id?: number;  
  title: string;
  year: string;
  cast: string;
  director: string;
  description?: string;
  genre?: string;
  imdb_rating?: number;
  length?: string;
  image_url?: string;
  movie_url?: string;
  trailer_url?: string;
  isEnabled?: number;
}

interface MovieCreationAttributes extends Optional<MovieAttributes, 'id' | 'description' | 'genre' | 'imdb_rating' | 'length' | 'image_url' | 'movie_url' | 'trailer_url' | 'isEnabled'> {}

class Movies extends Model<MovieAttributes, MovieCreationAttributes> implements MovieAttributes {
  public id!: number;
  public title!: string;
  public year!: string;
  public cast!: string;
  public director!: string;
  public description?: string;
  public genre?: string;
  public imdb_rating?: number;
  public length?: string;
  public image_url?: string;
  public movie_url?: string;
  public trailer_url?: string;
  public isEnabled?: number;
}

Movies.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cast: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    director: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    imdb_rating: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    length: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    movie_url: {
      type: DataTypes.STRING,
      allowNull: true,  
    },
    trailer_url: {
      type: DataTypes.STRING,
      allowNull: true,  
    },
    isEnabled: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize, 
    tableName: 'movies',
    timestamps: false, 
  }
);

sequelize.sync()
  .then(() => {
    console.log('Database and tables synced');
  })
  .catch(error => {
    console.error('Error syncing database:', error);
  });

export default Movies;
