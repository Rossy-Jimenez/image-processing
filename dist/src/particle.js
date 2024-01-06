var Particle = /** @class */ (function () {
    function Particle(width, height, screenCanvas, mapImg) {
        this.width = width;
        this.height = height;
        this.ctx = screenCanvas;
        this.x = Math.random() * width;
        this.y = 0;
        this.speed = 0;
        this.velocity = Math.random() * 2.5;
        this.size = Math.random() * 1.5 + 1;
        this._2PI = Math.PI * 2;
        this.position1 = Math.floor(this.y);
        this.position2 = Math.floor(this.x);
        this.mappedImage = mapImg;
    }
    Particle.prototype.update = function () {
        this.position1 = Math.floor(this.y);
        this.position2 = Math.floor(this.x);
        var movement = 0;
        if (this.y < this.height) {
            this.speed = this.mappedImage[0][this.position1][this.position2];
            movement = (2.5 - this.speed) + this.velocity;
        }
        this.y += movement;
        if (this.y >= this.height) {
            this.y = 0;
            this.x = Math.random() * this.width;
        }
    };
    Particle.prototype.draw = function () {
        this.ctx.beginPath();
        //this.ctx.fillStyle = this.mappedImage[1][this.position1][this.position2];
        this.ctx.fillStyle = 'white';
        this.ctx.arc(this.x, this.y, this.size, 0, this._2PI);
        this.ctx.fill();
    };
    Particle.prototype.getSpeed = function () {
        return this.speed;
    };
    return Particle;
}());
export { Particle };
var ParticleText = /** @class */ (function () {
    function ParticleText(x, y, screenCanvas, mapImg) {
        this.ctx = screenCanvas;
        this.x = x; // + 200;
        this.y = y; // - 100,
        this.size = 1;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = ((Math.random() * 30) + 1);
        this._2PI = Math.PI * 2;
        this.mappedImage = mapImg;
    }
    ParticleText.prototype.update = function (mouse) {
        var dx = mouse.x - this.x;
        var dy = mouse.y - this.y;
        var distance = Math.sqrt(dx * dx + dy * dy);
        var forceDirectionX = dx / distance;
        var forceDirectionY = dy / distance;
        var maxDistance = mouse.radius;
        var force = (maxDistance - distance) / maxDistance;
        var directionX = (forceDirectionX * force * this.density);
        var directionY = (forceDirectionY * force * this.density);
        if (distance < mouse.radius) {
            this.x -= directionX;
            this.y -= directionY;
        }
        else {
            if (this.x !== this.baseX) {
                var dx_1 = this.x - this.baseX;
                this.x -= dx_1 / 5;
            }
            if (this.y !== this.baseY) {
                var dy_1 = this.y - this.baseY;
                this.y -= dy_1 / 5;
            }
        }
    };
    ParticleText.prototype.draw = function () {
        this.ctx.fillStyle = 'blue';
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, this._2PI);
        this.ctx.closePath();
        this.ctx.fill();
    };
    return ParticleText;
}());
export { ParticleText };
var Bubble = /** @class */ (function () {
    function Bubble(x, y, size, ctx, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.ctx = ctx;
        this.velocityX = Math.random() * 2 - 1; // Random horizontal velocity
        this.velocityY = Math.random() * 2 - 1; // Random vertical velocity
        this.color = color;
    }
    Bubble.prototype.update = function () {
        this.x += this.velocityX;
        this.y += this.velocityY;
        // Bounce off the walls
        if (this.x + this.size > this.ctx.canvas.width || this.x - this.size < 0) {
            this.velocityX *= -1;
        }
        if (this.y + this.size > this.ctx.canvas.height || this.y - this.size < 0) {
            this.velocityY *= -1;
        }
    };
    Bubble.prototype.draw = function () {
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.closePath();
        this.ctx.fill();
    };
    return Bubble;
}());
export { Bubble };
var RainBubble = /** @class */ (function () {
    function RainBubble(x, y, size, ctx, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.ctx = ctx;
        this.velocityX = (Math.random() * 2 - 1) * 2; // Aumenta la velocidad horizontal
        this.velocityY = (Math.random() * 2 - 1) * 4; // Aumenta la velocidad vertical
        this.color = color;
    }
    RainBubble.prototype.update = function () {
        this.y += this.velocityY;
        // Vuelve a la parte superior cuando alcanza el fondo
        if (this.y - this.size > this.ctx.canvas.height) {
            this.y = -this.size;
        }
    };
    RainBubble.prototype.draw = function () {
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.closePath();
        this.ctx.fill();
    };
    return RainBubble;
}());
export { RainBubble };
var RainWave = /** @class */ (function () {
    function RainWave(x, y, radius, ctx) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.ctx = ctx;
        this.speed = 2; // Velocidad de propagación de las ondas
    }
    RainWave.prototype.update = function () {
        this.radius += this.speed; // Aumenta el radio para simular propagación
    };
    RainWave.prototype.draw = function () {
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.closePath();
        this.ctx.stroke();
    };
    return RainWave;
}());
export { RainWave };
