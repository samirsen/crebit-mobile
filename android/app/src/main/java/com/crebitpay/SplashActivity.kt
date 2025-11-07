package com.crebitpay

import android.animation.AnimatorSet
import android.animation.ObjectAnimator
import android.content.Intent
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import android.view.animation.AccelerateDecelerateInterpolator
import android.widget.ImageView
import androidx.appcompat.app.AppCompatActivity

class SplashActivity : AppCompatActivity() {

    private lateinit var gradientBackground: ImageView
    private lateinit var splashText: ImageView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_splash)

        // Initialize views
        gradientBackground = findViewById(R.id.gradient_background)
        splashText = findViewById(R.id.splash_text)

        // Set initial state - splash text is invisible
        splashText.alpha = 0f
        splashText.scaleX = 0.8f
        splashText.scaleY = 0.8f

        // Start animation sequence
        startSplashAnimation()
    }

    private fun startSplashAnimation() {
        // Delay before showing splash text
        Handler(Looper.getMainLooper()).postDelayed({
            animateSplashText()
        }, 500) // 0.5 second delay

        // Start checking for React Native readiness after minimum splash time
        Handler(Looper.getMainLooper()).postDelayed({
            checkReactNativeReady()
        }, 2000) // Minimum 2 seconds splash time
    }
    
    private fun checkReactNativeReady() {
        // Simplified approach: Just navigate after minimum splash time
        // React Native will handle its own loading state
        navigateToMainActivity()
    }

    private fun animateSplashText() {
        // Create fade in animation
        val fadeIn = ObjectAnimator.ofFloat(splashText, "alpha", 0f, 1f)
        fadeIn.duration = 1000 // 1 second

        // Create scale animations
        val scaleX = ObjectAnimator.ofFloat(splashText, "scaleX", 0.8f, 1.05f, 1f)
        val scaleY = ObjectAnimator.ofFloat(splashText, "scaleY", 0.8f, 1.05f, 1f)
        scaleX.duration = 1300 // Slightly longer for the bounce effect
        scaleY.duration = 1300

        // Combine animations
        val animatorSet = AnimatorSet()
        animatorSet.playTogether(fadeIn, scaleX, scaleY)
        animatorSet.interpolator = AccelerateDecelerateInterpolator()
        animatorSet.start()
    }

    private fun navigateToMainActivity() {
        val intent = Intent(this, MainActivity::class.java)
        startActivity(intent)
        finish()
        // Add fade transition
        overridePendingTransition(android.R.anim.fade_in, android.R.anim.fade_out)
    }

    override fun onBackPressed() {
        // Disable back button during splash screen
    }
}
