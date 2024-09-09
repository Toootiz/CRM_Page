import {
  Admin,
  Resource, defaultTheme, useTheme
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { UserList } from "./users";
import { UserEdit } from "./users";
import { UserCreate } from "./users";
import { PostList } from "./posts";
import { PostEdit } from "./posts"; 
import { CreatePost } from "./posts";
import { authProvider } from "./authProvider";
import { CommentList } from "./comments";
import { CommentEdit } from "./comments";
import { CommentCreate } from "./comments";
import { AlbumsList } from "./albums";
import { AlbumsEdit } from "./albums";
import { AlbumsCreate } from "./albums";
import { PhotosList } from "./photos";
import { PhotosEdit } from "./photos";
import { PhotosCreate } from "./photos";
import { TodosList } from "./todos";
import { TodosEdit } from "./todos";
import { TodosCreate } from "./todos";



export const App = () => (
  <Admin authProvider = {authProvider} layout={Layout} dataProvider={dataProvider}>
    <Resource name = 'users' list = {UserList} edit = {UserEdit} create = {UserCreate}/>
    <Resource name = 'posts' list = {PostList} edit = {PostEdit} create = {CreatePost}/>
    <Resource name = 'comments' list = {CommentList} edit = {CommentEdit} create = {CommentCreate}/>
    <Resource name = 'albums' list = {AlbumsList} edit = {AlbumsEdit} create = {AlbumsCreate}/>
    <Resource name = 'photos' list = {PhotosList} edit = {PhotosEdit} create = {PhotosCreate}/>
    <Resource name = 'todos' list = {TodosList} edit = {TodosEdit} create = {TodosCreate}/>
  </Admin>
);