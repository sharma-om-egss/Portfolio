import React from 'react'

export default function Header() {
  return (
    <>
    <section className="header">
    <div className="navbar">
        <div className="logo">
            <a href="index.php"><img src="Logo-1-Header.png" alt="" /></a>
        </div>
        <div className="nav-right d-flex">
            <a href="all-games.php">All Games</a>&emsp;
            <a href="forums.php">Forum</a>&emsp;
            <a href="events.php">Events</a>&emsp;
            <a href="##">Log In</a>
            <span className="user-login-profile">
                <img src="img/avatar.jpg" alt="" />
                <span className="user-name ms-1 mb-0">User Name <i className="fa fa-angle-down"></i></span>
                <div className="user-login-dropdown">
                    <ul>
                        <li><a href="###">Profile</a></li>
                        <li><a href="###">Dashboard</a></li>
                        <li><a href="###">Settings</a></li>
                    </ul>
                </div>
            </span>
            <span><i className="fa fa-bars sidebar-toggle"></i></span>
        </div>
    </div>
</section>
    </>
  )
}
