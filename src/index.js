import { join } from 'path';
import { success, error } from 'consola';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { PORT, IN_PROD, DB_URI } from './config';
import { resolvers, typeDefs } from './graphql';

import { schemaDirectives } from './graphql/directives';
import AuthMiddleware from './middlewares/auth';

import mongoose from 'mongoose';
import * as AppModels from './models';

import cors from 'cors';

// initialize express
const app = express();
/*
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});
*/
app.use(cors());
app.use(AuthMiddleware);
app.use(express.json());
app.use(express.static(join(__dirname, './uploads')));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  schemaDirectives,
  playground: IN_PROD,
  context: ({ req }) => {
    let { isAuth, user } = req;
    return {
      user,
      isAuth,
      req,
      ...AppModels,
    };
  },
});

const startApp = async () => {
  // inject apollo server middleware on express application

  try {
    await mongoose.connect(
      // 'mongodb+srv://sandy:sandy@cluster0.omigq.mongodb.net/college-project?retryWrites=true&w=majority',
      DB_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      },
    );
    success({
      message: 'Successfully connected with database',
      badge: true,
    }),
      server.applyMiddleware({ app });
    app.listen(PORT, () =>
      success({
        message: 'Server started on http://localhost:' + PORT,
        badge: true,
      }),
    );
  } catch (err) {
    error({
      message: err.message,
      badge: true,
    });
  }
};

startApp();
