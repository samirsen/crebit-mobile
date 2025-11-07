import UIKit
import React
import React_RCTAppDelegate
import ReactAppDependencyProvider

@main
class AppDelegate: RCTAppDelegate {
  
  private var splashWindow: UIWindow?
  
  override func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {
    self.moduleName = "Crebit"
    self.dependencyProvider = RCTAppDependencyProvider()

    // You can add your custom initial props in the dictionary below.
    // They will be passed down to the ViewController used by React Native.
    self.initialProps = [:]

    let result = super.application(application, didFinishLaunchingWithOptions: launchOptions)
    
    // Show animated splash screen
    showAnimatedSplashScreen()
    
    return result
  }
  
  // Use a simpler approach - wait for minimum time then check periodically
  private func startSplashTimer() {
    // Minimum splash time of 2 seconds, then start checking
    DispatchQueue.main.asyncAfter(deadline: .now() + 2.0) {
      self.checkAndHideSplashScreen()
    }
  }
  
  private func checkAndHideSplashScreen() {
    // Simple check: if splash window exists and we've waited minimum time, hide it
    if self.splashWindow != nil {
      // Check if we have a valid bridge
      if let bridge = self.bridge, bridge.isValid {
        self.hideSplashScreen()
      } else {
        // If no bridge yet, wait a bit more (max 5 seconds total)
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
          self.hideSplashScreenFallback()
        }
      }
    }
  }
  
  private func hideSplashScreenFallback() {
    // Fallback: hide splash after maximum wait time
    if self.splashWindow != nil {
      self.hideSplashScreen()
    }
  }
  
  private func showAnimatedSplashScreen() {
    guard let windowScene = UIApplication.shared.connectedScenes.first as? UIWindowScene else { return }
    
    // Create splash window
    splashWindow = UIWindow(windowScene: windowScene)
    splashWindow?.windowLevel = UIWindow.Level.statusBar + 1
    
    // Create splash view controller
    let splashViewController = UIViewController()
    let splashView = splashViewController.view!
    
    // Set background color (same as storyboard)
    splashView.backgroundColor = UIColor(red: 0.0, green: 0.22745098039215686, blue: 0.23529411764705882, alpha: 1.0)
    
    // Create gradient background image view
    let gradientImageView = UIImageView(image: UIImage(named: "gradient_bg"))
    gradientImageView.contentMode = .scaleAspectFill
    gradientImageView.translatesAutoresizingMaskIntoConstraints = false
    splashView.addSubview(gradientImageView)
    
    // Create splash text image view (initially hidden)
    let splashTextImageView = UIImageView(image: UIImage(named: "splash_text"))
    splashTextImageView.contentMode = .scaleAspectFill
    splashTextImageView.translatesAutoresizingMaskIntoConstraints = false
    splashTextImageView.alpha = 0.0 // Start invisible
    splashView.addSubview(splashTextImageView)
    
    // Set up constraints
    NSLayoutConstraint.activate([
      // Gradient background - full screen
      gradientImageView.topAnchor.constraint(equalTo: splashView.topAnchor),
      gradientImageView.leadingAnchor.constraint(equalTo: splashView.leadingAnchor),
      gradientImageView.trailingAnchor.constraint(equalTo: splashView.trailingAnchor),
      gradientImageView.bottomAnchor.constraint(equalTo: splashView.bottomAnchor),
      
      // Splash text - within safe area
      splashTextImageView.topAnchor.constraint(equalTo: splashView.safeAreaLayoutGuide.topAnchor),
      splashTextImageView.leadingAnchor.constraint(equalTo: splashView.safeAreaLayoutGuide.leadingAnchor),
      splashTextImageView.trailingAnchor.constraint(equalTo: splashView.safeAreaLayoutGuide.trailingAnchor),
      splashTextImageView.bottomAnchor.constraint(equalTo: splashView.safeAreaLayoutGuide.bottomAnchor)
    ])
    
    splashWindow?.rootViewController = splashViewController
    splashWindow?.makeKeyAndVisible()
    
    // Animate splash text appearance after a short delay
    DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
      UIView.animate(withDuration: 1.0, delay: 0.0, options: [.curveEaseInOut], animations: {
        splashTextImageView.alpha = 1.0
        // Add a subtle scale animation
        splashTextImageView.transform = CGAffineTransform(scaleX: 1.05, y: 1.05)
      }) { _ in
        UIView.animate(withDuration: 0.3, animations: {
          splashTextImageView.transform = CGAffineTransform.identity
        })
      }
    }
    
    // Start timer to check for JS readiness
    startSplashTimer()
  }
  
  private func hideSplashScreen() {
    UIView.animate(withDuration: 0.5, animations: {
      self.splashWindow?.alpha = 0.0
    }) { _ in
      self.splashWindow?.isHidden = true
      self.splashWindow = nil
    }
  }

  override func sourceURL(for bridge: RCTBridge) -> URL? {
    self.bundleURL()
  }

  override func bundleURL() -> URL? {
#if DEBUG
    RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index")
#else
    Bundle.main.url(forResource: "main", withExtension: "jsbundle")
#endif
  }
}
