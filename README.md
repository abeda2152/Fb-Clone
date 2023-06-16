# Fb-Clone
In this project, we built an advanced social media clone similar to Facebook. 
* built an authentication system so one can register, login, and reset the password if needed. 
* have a form validation for registration using Formik and Yup (to show error messages) for the name to be a certain length or free from special characters, email, and password validation, age verification, etc. Also, the username is auto-generated and unique.
* built a scalable strong backend using node js and express js
* used nodemailer to create a mailing system for email verification to activate the account. Used JWT for creating a unique token for each user when they login.
* created a homepage similar to facebook, where all the public post and friends post will be visible. This is ordered from newest to oldest and live updating using Moments.
* created a post box for posting texts, texts using backgrounds, images and also used react emoji picker plugin for emojis.
* can also react on a post and unreact using react hook, displays the react number, and shows top three most reacted emojis.
* can also create comments using text, emoji, and pictures which displays in an ordered manner.
* can save/unsave posts, download post images, and delete your posts.
* have restrictions for file size when uploading post and shows an error message with a nice animation.
* images can be crop, zoom, rotate and flip using react easy crop.
* can upload cover picture from existing photos or new photos. After uploading it will auto create a post saying user updated his/her cover picture.
* Every user have its profile, where all details displayed from cover, profile picture, details (othername, bio, job, workplace, relationship...), photos, friends, posts
* can update all your details and see changes live directly.
* for image storing in the database, Cloudinary is used.
* can add/delete/request/unfriend/follow/unfollow friends
* have a page for all friend request, sent requests and for current friends.
* have live search functionality with saved recent searches
* used react spinners and skeleton loaders while the page load data from backend
* used token (unique for each user) to create protected routes.
