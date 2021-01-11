const offer = {};

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
