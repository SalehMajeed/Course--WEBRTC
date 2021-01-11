const lc = new RTCPeerConnection(); //local connection
const dc = lc.createDataChannel('sendChannel'); // data channel
dc.onmessage = e => console.log('just got a message' + e.data);
dc.onopen = e => console.log('Connection Opened');
lc.onicecandidate = e => console.log('new ice candidate ! reprinting SDP' + JSON.stringify(lc.localDescription));
lc.createOffer()
	.then(o => lc.setLocalDescription(o))
	.then(a => console.log('set successfully'));

// copy line 1 - 8 and past in another browser that will sent you new ice candidate json and paste it into offer.js assign to offer variable.

const answer = {}

lc.setRemoteDescription(answer);

// now copy line 12 - 18 and run that on browser.
