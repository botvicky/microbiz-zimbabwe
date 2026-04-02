"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: true,
    marketing: false,
    preferences: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setIsVisible(true)
    } else {
      try {
        const savedPrefs = JSON.parse(consent)
        if (savedPrefs && typeof savedPrefs === "object") {
          setPreferences((prev) => ({ ...prev, ...savedPrefs }))
        }
      } catch (e) {
        // Handle legacy "accepted"/"declined" values if necessary
      }
    }
  }, [])

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    }
    localStorage.setItem("cookie-consent", JSON.stringify(allAccepted))
    setIsVisible(false)
  }

  const handleDeclineAll = () => {
    const allDeclined = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    }
    localStorage.setItem("cookie-consent", JSON.stringify(allDeclined))
    setIsVisible(false)
  }

  const handleSaveSettings = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences))
    setIsSettingsOpen(false)
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-card/95 backdrop-blur-lg border-t border-border shadow-2xl">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex-1 text-sm text-muted-foreground max-w-2xl px-4 text-center sm:text-left">
            We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept All", you
            consent to our use of cookies.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsSettingsOpen(true)}
              className="text-muted-foreground bg-transparent border-border hover:bg-accent"
            >
              Cookie Settings
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleDeclineAll}
              className="text-muted-foreground bg-transparent border-border hover:bg-accent"
            >
              Reject All
            </Button>
            <Button size="sm" onClick={handleAcceptAll} className="bg-primary hover:bg-primary/90 text-white px-6">
              Accept All
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl">Cookie Settings</DialogTitle>
            <DialogDescription className="pt-2">
              Manage your cookie preferences below. You can enable or disable different types of cookies.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            <div className="flex items-start justify-between gap-4 p-4 rounded-xl border border-border/50 bg-accent/5">
              <div className="space-y-1">
                <Label className="text-base font-bold">Necessary Cookies</Label>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  These cookies are essential for the website to function properly. They cannot be disabled.
                </p>
              </div>
              <Switch checked={true} disabled />
            </div>

            <div className="flex items-start justify-between gap-4 p-4 rounded-xl border border-border/50 hover:bg-accent/5 transition-colors">
              <div className="space-y-1">
                <Label className="text-base font-bold">Analytics Cookies</Label>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  These cookies help us understand how visitors interact with our website, helping us improve your
                  experience.
                </p>
              </div>
              <Switch
                checked={preferences.analytics}
                onCheckedChange={(checked) => setPreferences((p) => ({ ...p, analytics: checked }))}
              />
            </div>

            <div className="flex items-start justify-between gap-4 p-4 rounded-xl border border-border/50 hover:bg-accent/5 transition-colors">
              <div className="space-y-1">
                <Label className="text-base font-bold">Marketing Cookies</Label>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  These cookies are used to track visitors across websites for marketing purposes.
                </p>
              </div>
              <Switch
                checked={preferences.marketing}
                onCheckedChange={(checked) => setPreferences((p) => ({ ...p, marketing: checked }))}
              />
            </div>

            <div className="flex items-start justify-between gap-4 p-4 rounded-xl border border-border/50 hover:bg-accent/5 transition-colors">
              <div className="space-y-1">
                <Label className="text-base font-bold">Preferences Cookies</Label>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  These cookies allow the website to remember choices you make (such as language or region).
                </p>
              </div>
              <Switch
                checked={preferences.preferences}
                onCheckedChange={(checked) => setPreferences((p) => ({ ...p, preferences: checked }))}
              />
            </div>
          </div>

          <DialogFooter className="flex-row gap-2 sm:justify-end border-t pt-4">
            <Button variant="outline" onClick={() => setIsSettingsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveSettings} className="bg-primary text-white hover:bg-primary/90">
              Save Preferences
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
