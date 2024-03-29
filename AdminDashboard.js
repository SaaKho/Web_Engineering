import React from 'react';
import './AdminDashboard.css';

export default function AdminDashboard() {
    return (
        <div>
            <header>Hotel Management System - Admin Dashboard</header>
            <div class="content">
                <div class="sidebar">
                    <div class="profile">
                        <img src="profilepic.png" alt="Admin profile picture" />
                        <div class="profile-info">
                            <p>
                                <strong>Username:</strong> Saadan Khokhar
                            </p>
                        </div>
                    </div>
                    <a href="#">Add Room</a>
                    <a href="#">Update Room</a>
                    <a href="#">Delete Room</a>
                    <a href="#">Manage Feedback</a>
                    <a href="#">Manage Reservations</a>
                    <a href="#" id="logout">
                        Update Profile
                    </a>
                    <a href="#" id="logout">
                        Logout
                    </a>
                </div>
            </div>
        </div>
    );
}