# Users-CRUD-App

You can: 
- read list of users
- create new user
- update an existing user
- remove user from the list

## App structure

- /components
  	- App.tsx
  	- Welcome.tsx
  	- UserList.tsx
  	- User.tsx
  	- CreateEditPage.tsx
  - /interfaces
  	- IUser
  	- index.ts
  - /store
      - /reducers
  			- index.ts
      - /thunks
  			- getUsersThunk()
  				- switchLoadingSpinnerActionCreator(true)
  				- api_call_to_server()
  				- then(users) - setUsersActionCreator(users)
  				- switchLoadingSpinnerActionCreator(false);
  			- updateUserThunk()
  				- switchLoadingSpinner(true);
  				- api_call_to_server()
  				- then(users) - updateUserActionCreator(id, user)
  				- switchLoadingSpinner(false);
  			- removeUserThunk()
  				- switchLoadingSpinner(true);
  				- api_call_to_server()
  				- then(users) - removeUserActionCreator(id)
  				- switchLoadingSpinner(false);
      - /actions
          - /actionTypes (as enum)
              - UI_LOADING
              - SET_USER_LIST
              - SELECT_USER
              - DESELECT_USER
              - UPDATE_USER
              - REMOVE_USER
          - /actionCreators
              - switchLoadingSpinnerActionCreator(enable: boolean)
              - setUsersActionCreator(users: IUser[])
  						- selectUserActionCreator(id: number)
  						- deselectUserActionCreator()
  						- updateUserActionCreator(id: number, data: IUser)
  						- removeUserActionCreator(id: number)
  - /api
      - UserService
  			- getAll(): Promise<IUser[]>
  			- get(id: number): Promise<IUser>
  			- update(id: number): Promise<number>
  			- remove(id: number): Promise<number>
      - index.ts for export UserService
  - config.ts with baseApiURL
