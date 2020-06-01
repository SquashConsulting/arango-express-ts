import modelBuilder from './modelBuilder';
import User from 'repository/collections/user';

/* Exports */
export default modelBuilder<Repo.User>(User.collection);
