
# Do wafting zephyrs quickly vex Jumbo?
## Go, lazy fat vixen; be shrewd, jump quick.
### Fickle jinx bog dwarves spy math quiz.
#### Big dwarves heckle my top quiz of jinx.
##### Fickle bog dwarves jinx empathy quiz.
###### Public junk dwarves hug my quartz fox.

**Lorem ipsum dolor sit amet**, consectetur<sup>1</sup> adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat<sup>2</sup>. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui _officia deserunt mollit anim id est laborum._

<blockquote class="leader-2 trailer-2">
	<h2 class="secondary-bold-italic blue center">
		Everything is designed.<br>
		Few things are designed well.
	</h2>
</blockquote>

<p class="secondary-face">
**Lorem ipsum dolor sit amet**, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui _officia deserunt mollit anim id est laborum._
</p>

<p><small>**Lorem ipsum dolor sit amet**, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui _officia deserunt mollit anim id est laborum._</small></p>

---

# Esri Geotrigger Service

- What does the Geotrigger Service do?
- Use Cases
- What is a trigger?

The Esri Geotrigger Service provides real-time location tracking, geofencing, and messaging tools for developers working on location based apps.

### What does the Geotrigger Service do?

The Geotrigger Service provides a way to add location-based alerts to iPhone and Android apps, while minimizing battery drain. The Geotrigger SDKs make use of several tracking profiles which are optimized for various use cases. The Geotrigger Service is cloud-based and does not require ArcGIS Server to run.

The Geotrigger Service can send messages to devices or notify your server so you can implement custom actions when triggers are fired. You can use the Geotrigger API to programmatically create a collection of triggers based on existing data sets, or allow users to create their own triggers.

### Use Cases

- Easily send messages to users when they arrive at certain areas.
- Create a workout tracking app without needing to build your own backend.
- Quickly track whether people are using your app more in your stores or at home.
- More Use Cases

### What is a trigger?

A trigger can be thought of as an invisible button or geofence that will execute an action when a condition is satisfied. When your mobile device enters (or leaves) the trigger area, the Geotrigger Service will send a notification to the device or to your server.

A trigger is composed of two components: a **condition** and an **action**.

A **condition** has a **geometry** (polygon or circle) and a **direction** (enter or leave). When the condition is met, i.e. you have just entered or left, the **action** is performed.

The **action** tells the Geotrigger Service to send a push notification with a preset message to a device and/or POST a blob of JSON data to your server. Actions can also be used to change the tracking profile on a device.

#### What can I do with **triggers**?

- Send a push notification to a user’s device when they enter or leave an area
- Send information about a trigger firing to a callback URL, which enables custom actions to be carried out on your server

---

<dl>
  <dt>Trigger</dt>
  <dd>A trigger is composed of two components: a **condition** and an **action**.</dd>

  <dt>Condition</dt>
  <dd>A **condition** has a **geometry** (polygon or circle) and a **direction** (enter or leave). When the condition is met, i.e. you have just entered or left, the **action** is performed.</dd>

	<dt>Action</dt>
	<dd>The **action** tells the Geotrigger Service to send a push notification with a preset message to a device and/or POST a blob of JSON data to your server. Actions can also be used to change the tracking profile on a device.</dd>
</dl>

---

```
// request
curl -H "Authorization: Bearer <Application or Device Access Token>" \
   -H "Content-type: application/json" -X GET \
   -d '{"tags": [ "red" ]}' \
   "http://geotrigger.arcgis.com/location/last"

// response
{
  "devices": [
    {
      "device": {
        "deviceId": "8907123u9yasdjkn",
        "tags": ["red", "device:8907123u9yasdjkn"],
        "properties": {}
      },
      "location": {
        "latitude":   51.883333,
        "longitude":  -176.645,
        "accuracy":   10.0,
        "timestamp":  "2014-02-18T16:03:53-0700"
      }
    }
  ]
}
```
