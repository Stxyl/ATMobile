//
//  ContentView.swift
//  ATHop
//
//  Created by Oryon Ivanov on 1/08/22.
//

import SwiftUI
import MapKit

struct ContentView: View {
    var body: some View {
        VStack {
            //implement background image
            Image("Backgroundtemp")
                .aspectRatio(contentMode: .fit)
        }
        
        //user prompts
        VStack {
            //TODO - Make info window
        }
        
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
