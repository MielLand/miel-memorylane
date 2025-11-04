
function playSound(url) {
    const audio = new Audio(url);
    audio.play().catch(error => {
        console.error("Failed to play the sound:", error);
    });
}
class MemoryFlashback {
    constructor() {
        this.overlay = document.getElementById('flashbackOverlay');
        this.container = document.getElementById('memoryContainer');
        this.textElement = document.getElementById('memoryText');
        this.metaElement = document.getElementById('memoryMeta');
        this.timeElement = document.getElementById('memoryTime');
        this.noise = document.querySelector('.noise');
        
        this.isActive = false;
        this.currentMemory = null;
        this.typewriterTimeout = null;
        
        this.initializeEffects();
    }
    
    initializeEffects() {
        setInterval(() => {
            if (this.isActive) {
                this.triggerRandomGlitch();
            }
        }, 2000 + Math.random() * 3000);
    }
    
    showMemory(text, meta = null) {
        playSound('sfx/memory_lane.ogg')
        if (this.isActive) return;
        this.isActive = true;
        this.currentMemory = text;
        
        this.textElement.textContent = '';
        this.resetAnimations();
        
        this.overlay.classList.add('active');
        
        setTimeout(() => {
            this.startMemorySequence(text, meta);
        }, 800);
        
        setTimeout(() => {
            this.hideMemory();
        }, 8000);
    }
    
    startMemorySequence(text, meta) {
        this.triggerScreenFlash();
        
        setTimeout(() => {
            this.container.classList.add('visible');
        }, 200);
        
        setTimeout(() => {
            this.typewriterEffect(text);
        }, 500);
        
        if (meta) {
            this.timeElement.textContent = meta;
        }
        
        this.noise.style.animation = 'staticNoise 0.1s infinite steps(8)';
    }
    
    typewriterEffect(text) {
        this.textElement.style.opacity = '1';
        this.textElement.classList.add('typing');
        
        let index = 0;
        const speed = 80 + Math.random() * 70;
        
        const typeChar = () => {
            if (index < text.length) {
                this.textElement.textContent = text.substring(0, index + 1);
                index++;
                
                const delay = speed + (Math.random() * 20 - 10);
                this.typewriterTimeout = setTimeout(typeChar, delay);
                
                if (Math.random() < 0.1 && index < text.length - 5) {
                    setTimeout(typeChar, 200 + Math.random() * 300);
                    return;
                }
            } else {
                setTimeout(() => {
                    this.textElement.classList.remove('typing');
                    this.textElement.style.whiteSpace = 'normal';
                    this.textElement.style.overflow = 'visible';
                    this.textElement.style.maxWidth = '100%';
                    
                    this.addChromaticEffect();
                }, 500);
            }
        };
        
        typeChar();
    }
    
    hideMemory() {
        if (!this.isActive) return;
        
        if (this.typewriterTimeout) {
            clearTimeout(this.typewriterTimeout);
        }
        
        this.container.classList.remove('visible');
        
        setTimeout(() => {
            this.overlay.classList.remove('active');
            this.noise.style.animation = 'none';
            this.isActive = false;
            this.currentMemory = null;
        }, 800);
    }
    
    resetAnimations() {
        this.container.classList.remove('visible');
        this.textElement.classList.remove('typing');
        this.textElement.style.opacity = '0';
        // this.textElement.style.whiteSpace = 'nowrap';
        // this.textElement.style.overflow = 'hidden';
        // this.textElement.style.maxWidth = 'fit-content';
        this.textElement.style.whiteSpace = 'normal';
        this.textElement.style.overflow = 'visible';
        this.textElement.style.maxWidth = '100%';
        this.textElement.style.margin = '0 auto 20px';
        this.textElement.style.position = 'relative';
        
        this.removeChromaticEffect();
    }
    
    addChromaticEffect() {
        this.textElement.style.position = 'relative';
        this.textElement.style.textShadow = `
            0 0 10px rgba(255, 255, 255, 0.3),
            0 0 20px rgba(200, 200, 255, 0.2),
            0 0 30px rgba(150, 150, 255, 0.1),
            2px 0 rgba(255, 0, 100, 0.2),
            -2px 0 rgba(0, 255, 255, 0.2)
        `;
    }
    
    removeChromaticEffect() {
        this.textElement.style.textShadow = `
            0 0 10px rgba(255, 255, 255, 0.3),
            0 0 20px rgba(200, 200, 255, 0.2),
            0 0 30px rgba(150, 150, 255, 0.1)
        `;
    }
    
    triggerScreenFlash() {
        const flash = document.createElement('div');
        flash.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(255, 255, 255, 0.9);
            z-index: 10000;
            pointer-events: none;
            animation: flashEffect 0.3s ease-out forwards;
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes flashEffect {
                0% { opacity: 0; }
                50% { opacity: 1; }
                100% { opacity: 0; }
            }
        `;
        document.head.appendChild(style);
        document.body.appendChild(flash);
        
        setTimeout(() => {
            document.body.removeChild(flash);
            document.head.removeChild(style);
        }, 300);
    }
    
    triggerRandomGlitch() {
        if (!this.isActive) return;
        
        const glitchTypes = ['textGlitch', 'screenTear', 'colorShift'];
        const randomGlitch = glitchTypes[Math.floor(Math.random() * glitchTypes.length)];
        
        switch (randomGlitch) {
            case 'textGlitch':
                this.textGlitch();
                break;
            case 'screenTear':
                this.screenTear();
                break;
            case 'colorShift':
                this.colorShift();
                break;
        }
    }
    
    textGlitch() {
        const original = this.textElement.style.transform;
        this.textElement.style.transform = `translateX(${Math.random() * 4 - 2}px) translateY(${Math.random() * 2 - 1}px)`;
        this.textElement.style.textShadow = `
            ${Math.random() * 4 - 2}px 0 rgba(255, 0, 100, 0.5),
            ${Math.random() * 4 - 2}px 0 rgba(0, 255, 255, 0.5)
        `;
        
        setTimeout(() => {
            this.textElement.style.transform = original;
            this.textElement.style.textShadow = `
                0 0 10px rgba(255, 255, 255, 0.3),
                0 0 20px rgba(200, 200, 255, 0.2),
                0 0 30px rgba(150, 150, 255, 0.1)
            `;
        }, 100 + Math.random() * 200);
    }
    
    screenTear() {
        const tear = document.createElement('div');
        tear.style.cssText = `
            position: absolute;
            top: ${Math.random() * 70 + 15}%;
            left: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, 
                transparent, 
                rgba(255, 255, 255, 0.8) 20%, 
                rgba(255, 0, 100, 0.6) 40%,
                rgba(0, 255, 255, 0.6) 60%,
                rgba(255, 255, 255, 0.8) 80%, 
                transparent
            );
            animation: tearMove 0.3s ease-out forwards;
            z-index: 11;
        `;
        
        const tearAnimation = `
            @keyframes tearMove {
                0% { transform: translateX(-100%); opacity: 0; }
                50% { opacity: 1; }
                100% { transform: translateX(100%); opacity: 0; }
            }
        `;
        
        const style = document.createElement('style');
        style.textContent = tearAnimation;
        document.head.appendChild(style);
        this.overlay.appendChild(tear);
        
        setTimeout(() => {
            this.overlay.removeChild(tear);
            document.head.removeChild(style);
        }, 300);
    }
    
    colorShift() {
        const originalFilter = this.overlay.style.filter;
        this.overlay.style.filter = `
            hue-rotate(${Math.random() * 60 - 30}deg) 
            saturate(${1.2 + Math.random() * 0.8}) 
            contrast(${1.1 + Math.random() * 0.3})
        `;
        
        setTimeout(() => {
            this.overlay.style.filter = originalFilter;
        }, 200 + Math.random() * 300);
    }
    
    formatTimestamp() {
        const phrases = [
            "A memory surfaces...",
            "Echoes from the past...",
            "Fragments of time...",
            "A distant recollection...",
            "The past whispers...",
            "Memory lane beckons...",
            "Time folds back...",
            "Nostalgia floods in..."
        ];
        return phrases[Math.floor(Math.random() * phrases.length)];
    }
}

const memorySystem = new MemoryFlashback();

window.addEventListener('message', function(event) {
    if (event.data.action === "showMemory") {
        const text = event.data.text;
        const meta = memorySystem.formatTimestamp();
        
        memorySystem.showMemory(text, meta);
    }
});

window.debugMemory = function(text) {
    memorySystem.showMemory(text || "This is a test memory to see how the flashback system works...");
};