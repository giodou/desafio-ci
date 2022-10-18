const Greetings = require('./hello');

test('Greetings', () => {
    expect(Greetings.hello('Giovane'))
        .toBe('Hello Giovanes!');
});