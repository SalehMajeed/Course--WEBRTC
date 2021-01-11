const offer = {
	type: 'offer',
	sdp:
		'v=0\r\no=- 2583745316006782095 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=msid-semantic: WMS\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=candidate:1121101870 1 udp 2113937151 364c717f-b9a3-408a-8361-3620d2bd2819.local 60234 typ host generation 0 network-cost 999\r\na=candidate:736941891 1 udp 2113939711 4ed495c3-725c-42df-924a-dedaf544cc9c.local 36435 typ host generation 0 network-cost 999\r\na=ice-ufrag:y7yL\r\na=ice-pwd:OXnYi7zu0+sLSgg6zB36akaO\r\na=ice-options:trickle\r\na=fingerprint:sha-256 64:0B:CD:25:28:82:4E:5C:D4:82:9B:D3:41:11:62:70:FB:2B:71:4D:57:36:ED:9D:36:D9:E5:83:BB:84:22:B1\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n',
};

const rc = new RTCPeerConnection(); //Remote Connection
rc.onicecandidate = e => console.log('new ice candidate ! reprinting SDP' + JSON.stringify(rc.localDescription));
rc.ondatachannel = e => {
	rc.dc = e.channel;
	rc.dc.onmessage = e => console.log('new message from client' + e.data);
	rc.dc.onopen = e => console.log('Connection Opened');
};
rc.setRemoteDescription(offer).then(a => console.log('offer set!'));
rc.createAnswer()
	.then(a => rc.setLocalDescription(a))
	.then(a => console.log('answer created'));
// once you got the offer then run this code from line 1 to 17 on the other browser that will give you an answer assign that answer to code.js at answer variable.
