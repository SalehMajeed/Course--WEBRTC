const lc = new RTCPeerConnection(); //local connection
const dc = lc.createDataChannel('sendChannel'); // data channel
dc.onmessage = e => console.log('just got a message' + e.data);
dc.onopen = e => console.log('Connection Opened');
lc.onicecandidate = e => console.log('new ice candidate ! reprinting SDP' + JSON.stringify(lc.localDescription));
lc.createOffer()
	.then(o => lc.setLocalDescription(o))
	.then(a => console.log('set successfully'));

// copy line 1 - 8 and past in another browser that will sent you new ice candidate json and paste it into offer.js assign to offer variable.

const answer = {
	type: 'answer',
	sdp:
		'v=0\r\no=mozilla...THIS_IS_SDPARTA-84.0.2 2669946296984878085 0 IN IP4 0.0.0.0\r\ns=-\r\nt=0 0\r\na=sendrecv\r\na=fingerprint:sha-256 F9:BC:64:91:56:01:86:86:D8:70:75:44:49:BB:A5:E1:9A:C8:3F:4B:C2:62:26:82:43:5B:C8:C1:8F:29:BB:25\r\na=group:BUNDLE 0\r\na=ice-options:trickle\r\na=msid-semantic:WMS *\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=candidate:0 1 UDP 2122187007 959d09b0-0efe-43d1-8bc1-5ef4002f0b1e.local 55594 typ host\r\na=candidate:1 1 UDP 2122252543 b1ef7051-dd5a-4c63-be6f-108038374d93.local 56645 typ host\r\na=candidate:2 1 TCP 2105458943 959d09b0-0efe-43d1-8bc1-5ef4002f0b1e.local 9 typ host tcptype active\r\na=candidate:3 1 TCP 2105524479 b1ef7051-dd5a-4c63-be6f-108038374d93.local 9 typ host tcptype active\r\na=sendrecv\r\na=end-of-candidates\r\na=ice-pwd:733647836d0c1f09d15fca028a8e024d\r\na=ice-ufrag:7c8e8e47\r\na=mid:0\r\na=setup:active\r\na=sctp-port:5000\r\na=max-message-size:1073741823\r\n',
};

lc.setRemoteDescription(answer);

// now copy line 12 - 18 and run that on browser.
