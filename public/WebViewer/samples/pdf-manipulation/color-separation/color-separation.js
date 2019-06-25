WebViewer({
  path: '../../../lib',
  fullAPI: true,
  initialDoc: '../../../samples/files/op-blend-test.pdf',
}, document.getElementById('viewer'))
  .then(function(instance) {
    var docViewer = instance.docViewer;
    var colorsElement = document.getElementById('colors');

    docViewer.on('documentLoaded', function() {
      var doc = docViewer.getDocument();

      // Enable color separation
      doc.enableColorSeparations(true);

      // Listen to each color in a PDF document
      doc.on('colorSeparationAdded', function(e, color) {
        var input = document.createElement('input');
        input.id = color.name;
        input.type = 'checkbox';
        input.checked = color.enabled;
        input.onchange = function(e) {
          instance.openElement('loadingModal');
          // Show/hide a color
          doc.enableSeparation(color.name, e.target.checked);
          // Redraw the canvas
          docViewer.refreshAll();
          docViewer.updateView();
        };

        var label = document.createElement('label');
        label.id = color.name + ' label';
        label.htmlFor = color.name;
        label.style.color = 'rgb(' + color.rgb.join(',') + ')';
        label.innerHTML = color.name;

        var lineBreak = document.createElement('br');

        colorsElement.appendChild(input);
        colorsElement.appendChild(label);
        colorsElement.appendChild(lineBreak);
      });
    });

    docViewer.on('mouseMove', function(e, nativeE) {
      var mouseLocation = docViewer.getToolMode().getMouseLocation(nativeE);
      var displayMode = docViewer.getDisplayModeManager().getDisplayMode();

      var pageIndex = displayMode.getSelectedPages(mouseLocation, mouseLocation).first;
      if (pageIndex !== null) {
        var pageCoordinate = displayMode.windowToPage(mouseLocation, pageIndex);
        if (pageCoordinate) {
          var pageNumber = pageCoordinate.pageIndex + 1;
          var x = pageCoordinate.x;
          var y = pageCoordinate.y;
          var results = docViewer.getColorSeparationsAtPoint(pageNumber, x, y);
          for (var i = 0; i < results.length; ++i) {
            // Update the text in color panel
            document.getElementById(results[i].name + ' label').innerHTML = results[i].name + ' ' + results[i].value + '%';
          }
        }
      }
    });

    docViewer.on('pageComplete', function() {
      instance.closeElement('loadingModal');
    });
  });