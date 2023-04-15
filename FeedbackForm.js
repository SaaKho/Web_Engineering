import React from 'react'
import './FeedbackForm.css'

export default function FeedbackForm() {
    return (

        <div class="feedback-form">
            <h2>Hotel Feedback Form</h2>
            <form>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required/>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required/>
                </div>
                <div class="form-group">
                    <label for="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
                        <small>Format: 123-456-7890</small>
                </div>
                <div class="form-group">
                    <label for="room-number">Room Number</label>
                    <input type="number" id="room-number" name="room-number" min="1" required/>
                </div>
                <div class="form-group">
                    <label for="stay-duration">Stay Duration (in days)</label>
                    <input type="number" id="stay-duration" name="stay-duration" min="1" required/>
                </div>
                <div class="form-group">
                    <label for="rating">Overall Rating</label>
                    <select id="rating" name="rating" required>
                        <option value="">Select Rating</option>
                        <option value="1">1 - Poor</option>
                        <option value="2">2 - Fair</option>
                        <option value="3">3 - Good</option>
                        <option value="4">4 - Very Good</option>
                        <option value="5">5 - Excellent</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="feedback">Any other Suggestion for Us?</label>
                    <textarea id="feedback" name="feedback" rows="5" required></textarea>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary">Submit Feedback</button>
                </div>
            </form>
        </div>

    );
}
